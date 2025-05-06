export function generatePaginationArray(currentPage: number, totalPages: number) {
  let pages: (number | string)[] = [];

  if (totalPages <= 7) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    let start = Math.max(2, currentPage - 2);
    let end = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage <= 3) {
      end = 5;
    }

    if (currentPage >= totalPages - 2) {
      start = totalPages - 4;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Siempre incluir última página
    pages.push(totalPages);
  }

  return pages;
}