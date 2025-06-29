import yaml from 'js-yaml';
import { ResumeData } from '@/types/resume';

export async function getResumeData(): Promise<ResumeData> {
  try {
    const response = await fetch('/data/resume-data.yml');
    const text = await response.text();
    return yaml.load(text) as ResumeData;
  } catch (error) {
    console.error('Error loading resume data:', error);
    throw error;
  }
}