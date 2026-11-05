"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";

const ADMIN_PASSWORD = "Valerie4321*";

interface AnalyticsData {
  pageViews: {
    hourlyViews: number;
    dailyViews: number;
    weeklyViews: number;
    totalViews: number;
    uniquePages: number;
    topPages: Array<{ path: string; count: number }>;
  };
  contactSubmissions: {
    hourlySubmissions: number;
    dailySubmissions: number;
    weeklySubmissions: number;
    totalSubmissions: number;
    recentSubmissions: Array<{
      id: string;
      timestamp: number;
      name: string;
      email: string;
      phone?: string;
      organization?: string;
      subject: string;
      message: string;
    }>;
  };
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
      // Auto-refresh every 30 seconds
      const interval = setInterval(fetchAnalytics, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  async function fetchAnalytics() {
    setAnalyticsLoading(true);
    try {
      const response = await fetch('/api/analytics/stats');
      if (response.ok) {
        const data = await response.json();
        setAnalyticsData(data);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setAnalyticsLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    setPassword("");
    setAnalyticsData(null);
  }

  function formatTimestamp(timestamp: number) {
    return new Date(timestamp).toLocaleString();
  }

  if (isLoading) {
    return (
      <>
        <SiteHeader />
        <main className="container" style={{ padding: "100px 20px", textAlign: "center" }}>
          <p>Loading...</p>
        </main>
      </>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <SiteHeader />
        <main className="container" style={{ padding: "100px 20px", maxWidth: "500px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1>Admin Access</h1>
            <p>Please enter the password to access the admin dashboard.</p>
          </div>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>
            {error && (
              <p style={{ color: "#dc2626", fontSize: "14px" }}>{error}</p>
            )}
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                backgroundColor: "#84cc16",
                color: "#000",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </main>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="container" style={{ padding: "100px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1>Admin Dashboard</h1>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {lastUpdated && (
              <span style={{ fontSize: "14px", color: "#666" }}>
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            )}
            <button
              onClick={fetchAnalytics}
              disabled={analyticsLoading}
              style={{
                padding: "10px 20px",
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: analyticsLoading ? "not-allowed" : "pointer",
                opacity: analyticsLoading ? 0.6 : 1,
              }}
            >
              {analyticsLoading ? "Refreshing..." : "Refresh"}
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 20px",
                backgroundColor: "#dc2626",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gap: "30px" }}>
          {/* Live Stats Overview */}
          <section style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "8px", backgroundColor: "#f9fafb" }}>
            <h2 style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ display: "inline-block", width: "10px", height: "10px", backgroundColor: "#22c55e", borderRadius: "50%", animation: "pulse 2s infinite" }}></span>
              Live Analytics
            </h2>
            {analyticsData ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>Page Views (Last Hour)</p>
                  <p style={{ fontSize: "32px", fontWeight: "bold", color: "#2563eb" }}>{analyticsData.pageViews.hourlyViews}</p>
                </div>
                <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>Page Views (Today)</p>
                  <p style={{ fontSize: "32px", fontWeight: "bold", color: "#2563eb" }}>{analyticsData.pageViews.dailyViews}</p>
                </div>
                <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>Contact Submissions (Today)</p>
                  <p style={{ fontSize: "32px", fontWeight: "bold", color: "#84cc16" }}>{analyticsData.contactSubmissions.dailySubmissions}</p>
                </div>
                <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>Total Page Views</p>
                  <p style={{ fontSize: "32px", fontWeight: "bold", color: "#6b7280" }}>{analyticsData.pageViews.totalViews}</p>
                </div>
              </div>
            ) : (
              <p style={{ color: "#666" }}>Loading analytics data...</p>
            )}
          </section>

          {/* Detailed Page Views */}
          <section style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h2 style={{ marginBottom: "20px" }}>Page View Details</h2>
            {analyticsData ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
                <div>
                  <p style={{ fontSize: "14px", color: "#666" }}>Weekly Views</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>{analyticsData.pageViews.weeklyViews}</p>
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#666" }}>Unique Pages</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>{analyticsData.pageViews.uniquePages}</p>
                </div>
              </div>
            ) : null}
            {analyticsData && analyticsData.pageViews.topPages.length > 0 ? (
              <div>
                <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>Top Pages</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                      <th style={{ textAlign: "left", padding: "10px" }}>Page</th>
                      <th style={{ textAlign: "right", padding: "10px" }}>Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsData.pageViews.topPages.map((page, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #e5e7eb" }}>
                        <td style={{ padding: "10px" }}>{page.path}</td>
                        <td style={{ textAlign: "right", padding: "10px", fontWeight: "bold" }}>{page.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p style={{ color: "#666" }}>No page view data yet</p>
            )}
          </section>

          {/* Contact Submissions */}
          <section style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h2 style={{ marginBottom: "20px" }}>Contact Form Submissions</h2>
            {analyticsData ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
                <div>
                  <p style={{ fontSize: "14px", color: "#666" }}>Last Hour</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>{analyticsData.contactSubmissions.hourlySubmissions}</p>
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#666" }}>This Week</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>{analyticsData.contactSubmissions.weeklySubmissions}</p>
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#666" }}>Total</p>
                  <p style={{ fontSize: "24px", fontWeight: "bold" }}>{analyticsData.contactSubmissions.totalSubmissions}</p>
                </div>
              </div>
            ) : null}
            {analyticsData && analyticsData.contactSubmissions.recentSubmissions.length > 0 ? (
              <div>
                <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>Recent Submissions</h3>
                <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                  {analyticsData.contactSubmissions.recentSubmissions.map((submission) => (
                    <div key={submission.id} style={{ padding: "15px", border: "1px solid #e5e7eb", borderRadius: "4px", marginBottom: "10px", backgroundColor: "#fff" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <strong>{submission.name}</strong>
                        <span style={{ fontSize: "12px", color: "#666" }}>{formatTimestamp(submission.timestamp)}</span>
                      </div>
                      <div style={{ marginBottom: "8px" }}>
                        <p style={{ fontSize: "14px", color: "#666", margin: "2px 0" }}>
                          <strong>Email:</strong> {submission.email}
                        </p>
                        {submission.phone && (
                          <p style={{ fontSize: "14px", color: "#666", margin: "2px 0" }}>
                            <strong>Phone:</strong> {submission.phone}
                          </p>
                        )}
                        {submission.organization && (
                          <p style={{ fontSize: "14px", color: "#666", margin: "2px 0" }}>
                            <strong>Organization:</strong> {submission.organization}
                          </p>
                        )}
                      </div>
                      <div style={{ marginBottom: "8px" }}>
                        <p style={{ fontSize: "14px", fontWeight: "600", margin: "2px 0" }}>Subject: {submission.subject}</p>
                      </div>
                      <div style={{ padding: "10px", backgroundColor: "#f9fafb", borderRadius: "4px", border: "1px solid #e5e7eb" }}>
                        <p style={{ fontSize: "13px", color: "#374151", margin: 0, whiteSpace: "pre-wrap" }}>{submission.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p style={{ color: "#666" }}>No contact submissions yet</p>
            )}
          </section>

          {/* External Analytics Links */}
          <section style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h2 style={{ marginBottom: "20px" }}>Google Analytics & Search Console</h2>
            <p style={{ marginBottom: "20px", color: "#666" }}>
              Monitor website performance, user engagement, and search visibility.
            </p>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <a
                href="https://analytics.google.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                Open Google Analytics
              </a>
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                Open Search Console
              </a>
            </div>
          </section>

          {/* Quick Links */}
          <section style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h2 style={{ marginBottom: "20px" }}>Quick Links</h2>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#84cc16",
                  color: "#000",
                  textDecoration: "none",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                View Contact Page
              </Link>
              <Link
                href="/"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#6b7280",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                Back to Home
              </Link>
            </div>
          </section>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </main>
    </>
  );
}
