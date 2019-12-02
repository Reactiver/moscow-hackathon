import { Injectable } from '@angular/core';

export const cloudItems = [
  {
    itemId: 1,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/docker-logo.svg',
    title: 'Docker',
    description: 'os Ubuntu 18.04',
  },
  {
    itemId: 2,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/default-logo.svg',
    title: 'LAMP',
    description: 'os Ubuntu 18.04',
  },
  {
    itemId: 3,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/nodejs-logo.svg',
    title: 'NodeJS',
    description: 'os Ubuntu 18.04',
  },
  {
    itemId: 4,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/wordpress-kubernetes-logo.svg',
    title: 'WordPress Kubernetes',
    description: 'version 5.2.4',
  },
  {
    itemId: 5,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/phpmyadmin-logo.png',
    title: 'PhpMyAdmin',
    description: 'version 4.6.6',
  },
  {
    itemId: 6,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/gitlab-ee-logo.svg',
    title: 'GitLab Enterpise Edition',
    description: 'version 12.4.3',
  },
  {
    itemId: 7,
    imageUrl: 'https://marketplace-assets.digitalocean.com/logos/mongodb-logo.svg',
    title: 'MongoDB',
    description: 'version 4.0.3',
  },
];

@Injectable()
export class MarketplaceService {
  constructor() {}
}
