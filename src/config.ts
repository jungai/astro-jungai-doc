export interface Sidebar {
  text: string;
  header: boolean;
  link?: string;
}

export const sideBar: Sidebar[] = [
  { text: 'Installation', header: true },
  { text: 'zsh', header: false, link: '/guides/zsh' },
  { text: 'fish', header: false, link: '/guides/fish' },
  { text: 'vscode', header: false, link: '/guides/vscode' },
  { text: 'vim', header: false, link: '/guides/vim' },
];
