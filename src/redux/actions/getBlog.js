import {GET_BLOG_SUCCEED} from "./types";
import API from "../../api";

const getBlogSucceed = (data) => ({
  type: GET_BLOG_SUCCEED,
  data
});

export function getBlog() {
  return async (dispatch) => {
    const res = await API.getBlogs();
    return dispatch(getBlogSucceed(res.data));
  };
}
