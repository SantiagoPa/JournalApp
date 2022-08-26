import { IconButton } from "@mui/material";

import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        harum, distinctio nemo asperiores libero recusandae optio vel voluptas
        excepturi! Alias quisquam sed corrupti eveniet soluta, voluptas cum
        voluptates ea quae?
      </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
      
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {  backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>

    </JournalLayout>
  );
};
