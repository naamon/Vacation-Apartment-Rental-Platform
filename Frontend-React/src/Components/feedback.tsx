

import { Alert, FloatingLabel, Form } from 'react-bootstrap';
import { RateUs } from './RateUs'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


export default function Feedbeck(props: any) {
    props.setShowSlide(false)
    const navigate = useNavigate()

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <h1>Rate your stay:</h1>
            <RateUs></RateUs>
            <br></br>
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="tell us more" style={{ marginLeft: "30%", marginRight: "30%" }}>
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <br></br>

            <Alert key={"warning  "} variant={"warning  "} style={{ marginLeft: "30%", marginRight: "30%" }}>
                Your response will not be displayed on the site and is intended for monitoring and improving the service
            </Alert>

            <br></br>

            <Stack direction="row" spacing={2}>
                <Button variant="outlined" color='inherit' endIcon={<SendIcon />} style={{ marginLeft: "48vw" }} onClick={() => { navigate('/'); props.setShowSlide(true) }}>
                    Send
                </Button>
            </Stack>


        </>
    )
}


//             <Route path="/feedbeck" element={<Feedback showSlide={props.showSlide} setShowSlide={props.setShowSlide}></Feedback>}></Route>

// @import "rsuite/dist/rsuite.css";

// #root{ padding: 10px; }
