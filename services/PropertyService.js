import {
  GetPropertyListSuccess,
  GetPropertyListError,
  GetPropertyDetailSuccess,
  GetPropertyDetailError,
  PostPropertySuccess,
  PostPropertyError,
  RestPostPropertySuccess
} from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import propertyList from '../utils/property-list.json';
import * as Snackbar from "../redux/actions/SnackbarActions";
import * as PropertyAction from "../redux/actions/PropertyAction";
import history from "../utils/history";
/**
 * ****** Service to fetch Property List
 */
export const PropertyListService = async (dispatch, data) => {
  // const result2 = propertyList;
  // dispatch(GetPropertyListSuccess(result2));
  try {
    const result1 = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_LIST_CLIENT,
      null,
      null,
      null,
      true
    );
    const result = propertyList;
    dispatch(GetPropertyListSuccess(result1.data.list));
  } catch (error) {
    dispatch(GetPropertyListError(error));
  }
};
export const PropertyAddRequest = () => {
  return {
    type: API_ENDPOINTS.PROPERTY_ADD_REQUEST,
    payload: null,
  };
};
export const PropertyDataRequest = () => {
  return {
    type: API_ENDPOINTS.PROPERTY_DATA_REQUEST,
    payload: null,
  };
};
// export const PropertyUpdateService = async (dispatch, data, imageData) => {
//   try {
//     const result = await ApiClient.call(
//       ApiClient.REQUEST_METHOD.POST,
//       API_ENDPOINTS.PROPERTY_UPDATE_ENDPOINT,
//       data,
//       null,
//       null,
//       true
//     );
//     var propertyId = data.propertyId;

//     if (imageData.mainImage) {
//       var mainImage = new FormData();
//       mainImage.append("image", imageData.mainImage);
//       mainImage.append("imagetype", "mainImage");
//       mainImage.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         mainImage,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.badrooms.length > 0) {
//       var badrooms = new FormData();
//       imageData.badrooms.forEach((item, index) => {
//         badrooms.append("image", item);
//       });
//       badrooms.append("imagetype", "badrooms");
//       badrooms.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         badrooms,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.bathrooms.length > 0) {
//       var bathrooms = new FormData();
//       imageData.bathrooms.forEach((item, index) => {
//         bathrooms.append("image", item);
//       });
//       bathrooms.append("imagetype", "bathrooms");
//       bathrooms.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         bathrooms,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.exteriorView.length > 0) {
//       var exteriorView = new FormData();
//       imageData.exteriorView.forEach((item, index) => {
//         exteriorView.append("image", item);
//       });
//       exteriorView.append("imagetype", "exteriorView");
//       exteriorView.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         exteriorView,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.floorPlan.length > 0) {
//       var floorPlan = new FormData();
//       imageData.floorPlan.forEach((item, index) => {
//         floorPlan.append("image", item);
//       });
//       floorPlan.append("imagetype", "floorPlan");
//       floorPlan.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         floorPlan,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.kitchen.length > 0) {
//       var kitchen = new FormData();
//       imageData.kitchen.forEach((item, index) => {
//         kitchen.append("image", item);
//       });
//       kitchen.append("imagetype", "kitchen");
//       kitchen.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         kitchen,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.livingRoom.length > 0) {
//       var livingRoom = new FormData();
//       imageData.livingRoom.forEach((item, index) => {
//         livingRoom.append("image", item);
//       });
//       livingRoom.append("imagetype", "livingRoom");
//       livingRoom.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         livingRoom,
//         null,
//         null,
//         true
//       );
//     }

//     // if (imageData.locationMap.length > 0) {
//     //   var locationMap = new FormData();
//     //   imageData.locationMap.forEach((item, index) => {
//     //     locationMap.append("image", item);
//     //   });
//     //   locationMap.append("imagetype", "locationMap");
//     //   locationMap.append("propertyId", propertyId);

//     //   await ApiClient.call(
//     //     ApiClient.REQUEST_METHOD.POST,
//     //     API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//     //     locationMap,
//     //     null,
//     //     null,
//     //     true
//     //   );
//     // }

//     if (imageData.masterPlan.length > 0) {
//       var masterPlan = new FormData();
//       imageData.masterPlan.forEach((item, index) => {
//         masterPlan.append("image", item);
//       });
//       masterPlan.append("imagetype", "masterPlan");
//       masterPlan.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         masterPlan,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.other.length > 0) {
//       var other = new FormData();
//       imageData.other.forEach((item, index) => {
//         other.append("image", item);
//       });
//       other.append("imagetype", "other");
//       other.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         other,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.roomImage.length > 0) {
//       var roomImage = new FormData();
//       imageData.roomImage.forEach((item, index) => {
//         roomImage.append("image", item);
//       });
//       roomImage.append("imagetype", "roomImage");
//       roomImage.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         roomImage,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.conference.length > 0) {
//       var conference = new FormData();
//       imageData.conference.forEach((item, index) => {
//         conference.append("image", item);
//       });
//       conference.append("imagetype", "conference");
//       conference.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         conference,
//         null,
//         null,
//         true
//       );
//     }

//     if (imageData.visitor.length > 0) {
//       var visitor = new FormData();
//       imageData.visitor.forEach((item, index) => {
//         visitor.append("image", item);
//       });
//       visitor.append("imagetype", "visitor");
//       visitor.append("propertyId", propertyId);

//       await ApiClient.call(
//         ApiClient.REQUEST_METHOD.POST,
//         API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
//         visitor,
//         null,
//         null,
//         true
//       );
//     }

//     dispatch(PropertyAction.PropertyUpdateSuccess(result));
//     dispatch(Snackbar.showSuccessSnackbar(result.message));
//     history.push("/property");
//     window.location.reload();
//   } catch (error) {
//     dispatch(PropertyAction.PropertyUpdateError(error));
//     dispatch(
//       Snackbar.showFailSnackbar(
//         error.response.data?.error?.error?.details[0]?.message
//       )
//     );
//   }
//   // dispatch(Loader.hideLoader(""));
// };
export const PropertyDataService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_DATA_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(PropertyAction.PropertyDataSuccess(result));
  } catch (error) {
    dispatch(PropertyAction.PropertyDataError(error));
    dispatch(
      Snackbar.showFailSnackbar(
        error.response?.data?.error?.error?.details[0]?.message
      )
    );
  }
  // dispatch(Loader.hideLoader(""));
};

export const PropertyAddService = async (dispatch, data, imageData) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    var propertyId = "6125373540f10f2712e43db5";
    if (result.propertyId !== "") {
      propertyId = result.propertyId;
    }
    if (imageData.mainImage) {
      var mainImage = new FormData();
      mainImage.append("image", imageData.mainImage);
      mainImage.append("imagetype", "mainImage");
      mainImage.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        mainImage,
        null,
        null,
        true
      );
    }

    if (imageData.badrooms.length > 0) {
      var badrooms = new FormData();
      imageData.badrooms.forEach((item, index) => {
        badrooms.append("image", item);
      });
      badrooms.append("imagetype", "badrooms");
      badrooms.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        badrooms,
        null,
        null,
        true
      );
    }

    if (imageData.bathrooms.length > 0) {
      var bathrooms = new FormData();
      imageData.bathrooms.forEach((item, index) => {
        bathrooms.append("image", item);
      });
      bathrooms.append("imagetype", "bathrooms");
      bathrooms.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        bathrooms,
        null,
        null,
        true
      );
    }

    if (imageData.exteriorView.length > 0) {
      var exteriorView = new FormData();
      imageData.exteriorView.forEach((item, index) => {
        exteriorView.append("image", item);
      });
      exteriorView.append("imagetype", "exteriorView");
      exteriorView.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        exteriorView,
        null,
        null,
        true
      );
    }

    if (imageData.floorPlan.length > 0) {
      var floorPlan = new FormData();
      imageData.floorPlan.forEach((item, index) => {
        floorPlan.append("image", item);
      });
      floorPlan.append("imagetype", "floorPlan");
      floorPlan.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        floorPlan,
        null,
        null,
        true
      );
    }

    if (imageData.kitchen.length > 0) {
      var kitchen = new FormData();
      imageData.kitchen.forEach((item, index) => {
        kitchen.append("image", item);
      });
      kitchen.append("imagetype", "kitchen");
      kitchen.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        kitchen,
        null,
        null,
        true
      );
    }

    if (imageData.livingRoom.length > 0) {
      var livingRoom = new FormData();
      imageData.livingRoom.forEach((item, index) => {
        livingRoom.append("image", item);
      });
      livingRoom.append("imagetype", "livingRoom");
      livingRoom.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        livingRoom,
        null,
        null,
        true
      );
    }

    // if (imageData.locationMap.length > 0) {
    //   var locationMap = new FormData();
    //   imageData.locationMap.forEach((item, index) => {
    //     locationMap.append("image", item);
    //   });
    //   locationMap.append("imagetype", "locationMap");
    //   locationMap.append("propertyId", propertyId);

    //   await ApiClient.call(
    //     ApiClient.REQUEST_METHOD.POST,
    //     API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
    //     locationMap,
    //     null,
    //     null,
    //     true
    //   );
    // }

    if (imageData.masterPlan.length > 0) {
      var masterPlan = new FormData();
      imageData.masterPlan.forEach((item, index) => {
        masterPlan.append("image", item);
      });
      masterPlan.append("imagetype", "masterPlan");
      masterPlan.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        masterPlan,
        null,
        null,
        true
      );
    }

    if (imageData.other.length > 0) {
      var other = new FormData();
      imageData.other.forEach((item, index) => {
        other.append("image", item);
      });
      other.append("imagetype", "other");
      other.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        other,
        null,
        null,
        true
      );
    }

    if (imageData.roomImage.length > 0) {
      var roomImage = new FormData();
      imageData.roomImage.forEach((item, index) => {
        roomImage.append("image", item);
      });
      roomImage.append("imagetype", "roomImage");
      roomImage.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        roomImage,
        null,
        null,
        true
      );
    }

    if (imageData.conference.length > 0) {
      var conference = new FormData();
      imageData.conference.forEach((item, index) => {
        conference.append("image", item);
      });
      conference.append("imagetype", "conference");
      conference.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        conference,
        null,
        null,
        true
      );
    }

    if (imageData.visitor.length > 0) {
      var visitor = new FormData();
      imageData.visitor.forEach((item, index) => {
        visitor.append("image", item);
      });
      visitor.append("imagetype", "visitor");
      visitor.append("propertyId", propertyId);

      await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        API_ENDPOINTS.PROPERTY_IMAGE_ENDPOINT,
        visitor,
        null,
        null,
        true
      );
    }

    dispatch(PropertyAction.PropertyAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.replace("/");
    window.location.reload();
  } catch (error) {
    dispatch(PropertyAction.PropertyAddError(error));
    dispatch(
      Snackbar.showFailSnackbar(
        error.response.data?.error?.error?.details[0]?.message
      )
    );
  }
  // dispatch(Loader.hideLoader(""));
};

/**
 * Service to fetch Property detail
 */
export const PropertyDetailService = async (dispatch, data) => {
  try {    
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, 
      API_ENDPOINTS.PROPERTY_DETAIL, 
      data, null, null, true);
    console.log("result of property detail api", result);    
    dispatch(GetPropertyDetailSuccess(result));
  } catch (error) {    
    dispatch(GetPropertyDetailError(error));
  }
};

export const ResetPostPropertySuccessService = async (dispatch) => {
  try {
    dispatch(RestPostPropertySuccess());
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
};

/**
 * Service to post new property
 */
export const PostPropertyService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.POST_PROPERTY_ENDPOINT, data, null, null, true);
    dispatch(PostPropertySuccess(result));
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
};

export const AddPropertyService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ADD_PROPERTY, data, null, null, true);
    dispatch(PostPropertySuccess(result));
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
};

export const UploadPropertyImageService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.UPLOAD_IMAGE, data, null, null, true);
    dispatch(PostPropertySuccess(result));
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
};


