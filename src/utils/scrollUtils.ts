export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  smoothScrollTo(sectionId);
};