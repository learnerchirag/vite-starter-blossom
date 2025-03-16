
/**
 * This file helps identify when a new build has been generated
 * It contains a timestamp to ensure the build is refreshed
 */

export const BUILD_TIMESTAMP = new Date().toISOString();
export const BUILD_ID = Math.random().toString(36).substring(2, 10);

console.log('Build refreshed at:', BUILD_TIMESTAMP, 'with ID:', BUILD_ID);
