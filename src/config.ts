export interface Sidebar {
  text: string;
  header: boolean;
}

export const sideBar: Sidebar[] = [
  { text: 'Installation', header: true },
  { text: 'zsh', header: false },
  { text: 'fish', header: false },
  { text: 'vscode', header: false },
  { text: 'vim', header: false },
];
