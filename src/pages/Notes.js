import Masonry from "react-masonry-css";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import useFetch from "../hooks/useFetch";
import NoteCard from "../components/NoteCard";
import requests from "../api/requests";

const Notes = () => {

    const {data: notes, error, isLoading, setRefresh} = useFetch(requests.notes);

    return (
        <Container>

            {isLoading && <CircularProgress sx={{display: "block", margin: "0 auto"}} />}

            {!!error && <Typography>{error}</Typography>}

            {!!notes && <Masonry
                breakpointCols={{
                    default: 3,
                    900: 2,
                    600: 1
                }}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {notes.map((note) => (
                    <div key={note.id}>
                        <NoteCard note={note} setRefresh={setRefresh} />
                    </div>
                ))}
            </Masonry>}
        </Container>
    );
}

export default Notes;