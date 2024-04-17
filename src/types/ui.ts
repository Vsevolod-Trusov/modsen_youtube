interface IFilterButton {
  name: string;
  testId?: string;
}

interface IIconButton {
  link: string;
  img: string;
}

interface IImage {
  avatar: string;
  preview: string;
  author: string;
  title: string;
  createdAt: string;
  id: string;
}

interface ILogo {
  title: string;
}

interface ISearchBar {
  placeholder?: string;
}

export { IFilterButton, IIconButton, IImage, ILogo, ISearchBar };
