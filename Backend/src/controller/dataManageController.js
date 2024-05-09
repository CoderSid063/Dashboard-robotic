const Data = require("../model/dataModel.js");
const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { asyncHandler } = require("../utils/AsyncHandler.js");

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
