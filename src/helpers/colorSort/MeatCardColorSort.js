
  const meatCardColorSort = (meatType) => {
    let domString = '';
    switch (meatType) {
    case 'type1':
      domString = 'card bg-danger';
      break;
    case 'type2':
      domString = 'card bg-warning';
      break;
    case 'type3':
      domString = 'card bg-success';
      break;
    case 'type4':
      domString = 'card bg-info';
      break;
    case 'type5':
      domString = 'card bg-primary';
      break;
    default:
      domString = 'card';
    }
    return domString;
  }

export default { meatCardColorSort };
