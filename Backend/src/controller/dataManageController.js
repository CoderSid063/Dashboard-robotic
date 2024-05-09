const Data = require("../model/dataModel");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/AsyncHandler");

const getData = asyncHandler(async (req, res) => {
  try {
    const data = await Data.find(req.query);
    res
      .status(200)
      .json(new ApiResponse(200, data, "data fetched successfully"));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(
        new ApiError(
          500,
          error?.message || "Error during fetching  data from database"
        )
      );
  }
});

module.exports = { getData };
