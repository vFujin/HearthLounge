export function blockSize(initialBlockSize, windowWidth) {
  const desktop = windowWidth >= 1366;
  const tablet = windowWidth >= 816 && windowWidth <= 1365;
  const mobile = windowWidth <= 815;

  switch(initialBlockSize){
    case 1: {
      if (desktop) return 1;
      if (tablet) return 2;
      if (mobile) return 4;
      break;
    }

    case 2: {
      if (desktop) return 2;
      if (tablet) return 2;
      if (mobile) return 4;
      break;
    }

    default: return initialBlockSize;
  }
}