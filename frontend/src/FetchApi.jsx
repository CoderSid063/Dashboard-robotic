import Axios from "axios";
import URL from "./utils/util.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "./store/dataSlice.js";

const FetchApi = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await Axios.get(URL)
      .then(({ data }) => {
        console.log(data);
        dispatch(dataActions.addData(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>FetchApi</div>;
};

export default FetchApi;
