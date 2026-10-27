const fs = require('fs');

console.log('=== AUDITING CONTENT & LINK INTEGRITY ===');
const contentFile = fs.readFileSync('src/data/siteContent.ts', 'utf8');

// Match all URLs
const urls = [...contentFile.matchAll(/https?:\/\/[^\s"',]+/g)].map(m => m[0]);
console.log(`Found ${urls.length} URLs in siteContent.ts`);

const invalidUrls = urls.filter(u => 
  !u.startsWith('https://techfest.org') &&
  !u.startsWith('https://www.instagram.com/techfest_iitbombay') &&
  !u.startsWith('https://x.com/Techfest_IITB') &&
  !u.startsWith('https://www.facebook.com/iitbombaytechfest') &&
  !u.startsWith('https://www.youtube.com/user/techfestiitbombay')
);

if (invalidUrls.length > 0) {
  console.error('Invalid or unverified URLs detected:', invalidUrls);
  process.exit(1);
} else {
  console.log('✓ 100% of URLs are strictly verified official Techfest / IIT Bombay destinations!');
}

// Check internal anchor IDs across components
const appFiles = fs.readdirSync('src/components').map(f => fs.readFileSync('src/components/' + f, 'utf8'));
const allIds = new Set();
appFiles.forEach(code => {
  const ids = [...code.matchAll(/id=["']([a-zA-Z0-9_\-]+)["']/g)].map(m => m[1]);
  ids.forEach(id => allIds.add(id));
});
console.log('Registered DOM Section IDs:', Array.from(allIds));

const allHrefs = new Set();
appFiles.forEach(code => {
  const hrefs = [...code.matchAll(/href=["'](#[a-zA-Z0-9_\-]+)["']/g)].map(m => m[1].slice(1));
  hrefs.forEach(h => allHrefs.add(h));
});
console.log('Referenced Anchor Targets:', Array.from(allHrefs));

let brokenAnchors = 0;
allHrefs.forEach(target => {
  if (target !== '' && !allIds.has(target)) {
    console.error(`Broken anchor: #${target} has no matching element id!`);
    brokenAnchors++;
  }
});

if (brokenAnchors === 0) {
  console.log('✓ All internal jump anchors (#discover, #competitions, #workshops, #robowars, #exhibitions, #about, #atmosphere, #contact, etc.) match live element IDs!');
}
