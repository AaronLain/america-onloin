const buttonColorSort = (meatType) => {
    let domString = '';
    switch (meatType) {
    case 'type1':
      domString = 'btn btn-sm btn-info';
      break;
    case 'type2':
      domString = 'btn btn-sm btn-primary';
      break;
    case 'type3':
      domString = 'btn btn-sm btn-danger';
      break;
    case 'type4':
      domString = 'btn btn-sm btn-success';
      break;
    case 'type5':
      domString = 'btn btn-sm btn-warning';
      break;
    default:
      domString = 'btn btn-sm btn-light';
    }
    return domString;
  }

export default { buttonColorSort };
