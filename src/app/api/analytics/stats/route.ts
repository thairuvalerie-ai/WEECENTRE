import { NextResponse } from 'next/server';
import { getPageViewStats, getContactSubmissionStats } from '@/lib/analytics';

export async function GET() {
  try {
    const pageViewStats = getPageViewStats();
    const contactStats = getContactSubmissionStats();

    return NextResponse.json({
      pageViews: pageViewStats,
      contactSubmissions: contactStats,
    });
  } catch (error) {
    console.error('Error fetching analytics stats:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
