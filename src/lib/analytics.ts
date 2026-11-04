import fs from 'fs';
import path from 'path';

const ANALYTICS_DIR = path.join(process.cwd(), 'data');
const PAGE_VIEWS_FILE = path.join(ANALYTICS_DIR, 'page-views.json');
const CONTACT_SUBMISSIONS_FILE = path.join(ANALYTICS_DIR, 'contact-submissions.json');

// Ensure data directory exists
if (!fs.existsSync(ANALYTICS_DIR)) {
  fs.mkdirSync(ANALYTICS_DIR, { recursive: true });
}

interface PageView {
  id: string;
  path: string;
  timestamp: number;
  userAgent?: string;
  referrer?: string;
}

interface ContactSubmission {
  id: string;
  timestamp: number;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject: string;
}

// Page Views Functions
export function getPageViews(): PageView[] {
  try {
    if (fs.existsSync(PAGE_VIEWS_FILE)) {
      const data = fs.readFileSync(PAGE_VIEWS_FILE, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading page views:', error);
    return [];
  }
}

export function addPageView(pageView: Omit<PageView, 'id'>): void {
  const views = getPageViews();
  const newView: PageView = {
    ...pageView,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  };
  views.push(newView);

  // Keep only last 1000 views to prevent file from growing too large
  const trimmedViews = views.slice(-1000);

  fs.writeFileSync(PAGE_VIEWS_FILE, JSON.stringify(trimmedViews, null, 2));
}

export function getPageViewStats() {
  const views = getPageViews();
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

  const hourlyViews = views.filter(v => v.timestamp >= oneHourAgo).length;
  const dailyViews = views.filter(v => v.timestamp >= oneDayAgo).length;
  const weeklyViews = views.filter(v => v.timestamp >= oneWeekAgo).length;
  const totalViews = views.length;

  // Get unique pages
  const uniquePages = [...new Set(views.map(v => v.path))];

  // Get top pages
  const pageCounts = views.reduce((acc, view) => {
    acc[view.path] = (acc[view.path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, count]) => ({ path, count }));

  return {
    hourlyViews,
    dailyViews,
    weeklyViews,
    totalViews,
    uniquePages: uniquePages.length,
    topPages,
  };
}

// Contact Submissions Functions
export function getContactSubmissions(): ContactSubmission[] {
  try {
    if (fs.existsSync(CONTACT_SUBMISSIONS_FILE)) {
      const data = fs.readFileSync(CONTACT_SUBMISSIONS_FILE, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading contact submissions:', error);
    return [];
  }
}

export function addContactSubmission(submission: Omit<ContactSubmission, 'id'>): void {
  const submissions = getContactSubmissions();
  const newSubmission: ContactSubmission = {
    ...submission,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  };
  submissions.push(newSubmission);

  // Keep only last 500 submissions
  const trimmedSubmissions = submissions.slice(-500);

  fs.writeFileSync(CONTACT_SUBMISSIONS_FILE, JSON.stringify(trimmedSubmissions, null, 2));
}

export function getContactSubmissionStats() {
  const submissions = getContactSubmissions();
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

  const hourlySubmissions = submissions.filter(s => s.timestamp >= oneHourAgo).length;
  const dailySubmissions = submissions.filter(s => s.timestamp >= oneDayAgo).length;
  const weeklySubmissions = submissions.filter(s => s.timestamp >= oneWeekAgo).length;
  const totalSubmissions = submissions.length;

  return {
    hourlySubmissions,
    dailySubmissions,
    weeklySubmissions,
    totalSubmissions,
    recentSubmissions: submissions.slice(-10).reverse(),
  };
}
