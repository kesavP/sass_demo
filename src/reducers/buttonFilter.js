const initialState = [
  {
    name: "CLICK ME",
    buttonFamily: [
      { id: 1, subscribed: true },
      { id: 2, subscribed: false },
      { id: 3, subscribed: false },
      { id: 4, subscribed: false }
    ],
    properties: "eb",
    pageNumber: 0,
    pageSize: 5,
    totalPages: 2
  }
];

export default function buttonFilter(state = initialState, action) {
  console.log("-------------------------- ", state);
  console.log("-------------------------- ", action);
  switch (action.type) {
    case "users-page-button-click":
      return stateManipulation(state, action);
    case "props-page-button-click":
      return propertyManipulation(state, action);
    case "page-number-change":
      return {
        ...state,
        pageNumber: action.payload
      };
    default:
      return {
        ...state[0],
        buttonFamily: [{ id: 5, subscribed: true }, { id: 1, subscribed: true }]
      };
  }
}

function stateManipulation(state, action) {
  return {
    ...state,
    name: "nmdklj",
    buttonFamily: manipulateDataArray(state.buttonFamily, action)
  };
}

function propertyManipulation(state, action) {
  return {
    ...state,
    properties: changePropValById(state.properties, action)
  };
}

function manipulateDataArray(array, replacedArray) {
  // console.log(replacedArray.pk.id);
  let buttonFamily = [];
  array.map(obj => {
    if (obj.id == replacedArray.pk.id) {
      buttonFamily.push({
        id: replacedArray.pk.id,
        subscribed: !replacedArray.pk.subscribed
      });
    } else {
      buttonFamily.push(obj);
    }
  });
  return buttonFamily;
}

function changePropValById(propertyArray, action) {
  console.log("property change", propertyArray);
  console.log("property action ", action.prop.id);
  let properties = [];
  propertyArray.map(obj => {
    if (obj.pk == action.prop.id) {
      properties.push({
        pk: obj.pk,
        key: obj.key,
        value: action.prop.newValue
      });
    } else {
      properties.push(obj);
    }
  });
  return properties;
}
