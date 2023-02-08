import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CircularProgress from "@mui/material/CircularProgress";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import lime from "@mui/material/colors/lime";
import green from "@mui/material/colors/green";
import cyan from "@mui/material/colors/cyan";
import blue from "@mui/material/colors/blue";
import axios from "../api/axios";
import { toast } from "react-toastify";
import requests from "../api/requests";
import { useState } from "react";

const NoteCard = ({note, setRefresh}) => {

    const [isDeleting, setIsDeleting] = useState(false);

    const classes = {
        avatar: {
            bgcolor: () => {
                if (note.category === "work") return lime[600];
                else if (note.category === "money") return green[500];
                else if (note.category === "todo") return cyan[500];
                else return blue[500];
            }
        }
    }

    const handleDelete = (id) => {
        setIsDeleting(true);

        axios.delete(`${requests.notes}/${id}`)
            .then((response) => { 
                toast.success("Success: Note has been Deleted");
                setRefresh(prev => prev + 1);
            })
            .catch((error) => {
                let message = "An error occurred";

                if (!!error.response?.statusText) message = error.response.statusText;
                else if (!!error.requests?.statusText) message = error.response.statusText;
                else message = error.message;

                toast.error("Error: " + message);
            })
            .finally(() => setIsDeleting(false));
    }

    return (
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                title={note.title}
                subheader={note.category}
                action={
                    <IconButton onClick={() => handleDelete(note.id)} disabled={!!isDeleting}>
                        {!!!isDeleting && <DeleteOutlineIcon/>}
                        {!!isDeleting && <CircularProgress size={20} />}
                    </IconButton>
                }
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NoteCard;