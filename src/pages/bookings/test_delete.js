// Combine these for delete button.


import { axiosRes } from "../../api/axiosDefaults";

import { useHistory } from "react-router-dom";


const handleDelete = async () => {
    try {
      await axiosRes.delete(`/bookings/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // Link to Delete button.

  <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
       
        // onClick={() => handleDelete()}

 
      >
        Delete
      </Button>
