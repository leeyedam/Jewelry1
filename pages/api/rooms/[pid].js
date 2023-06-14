// fake data
import rooms from "../../../utils/data/rooms";

export default (req, res) => {
  const {
    query: { pid },
  } = req;

  const room = rooms.find((x) => x.id === pid);
  res.status(200).json(room);
};
