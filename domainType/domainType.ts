/* 
GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature.
To begin with, you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info respectively.
For the given list of domains return the list of their labels.

*/

export function domainType(domains: string[]): string[] {
  const domainType: string[] = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.');
    const lastDomain = domain[domain.length - 1];

    if (lastDomain === 'org') {
      domainType.push('organization');
    } else if (lastDomain === 'com') {
      domainType.push('commercial');
    } else if (lastDomain === 'net') {
      domainType.push('network');
    } else if (lastDomain === 'info') {
      domainType.push('information');
    }
  }

  return domainType;
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);
