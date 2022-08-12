import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import * as React from "react";

const HalfRating = ({ value, children }) => {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={value}
        precision={0.1}
        readOnly
      />
    </Stack>
  );
};
export default HalfRating;
