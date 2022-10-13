import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";

const studentData = [
  {
    name: "Stephen",
    submissions: {
      beavers: 3,
      stars: 2,
    },
  },
  {
    name: "Eduardo",
    submissions: {
      beavers: 7,
      stars: 1,
    },
  },
  {
    name: "Pepe",
    submissions: {
      beavers: 6,
      stars: 9,
    },
  },
  {
    name: "Gigachad",
    submissions: {
      beavers: 0,
      stars: 10,
    },
  },
];

function App() {
  return (
    <div className="App">
      <ResponsiveContainer width="90%" height={400}>
        <BarChart width={730} height={250} data={studentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="submissions.beavers" name="Beavers" fill="#ce9f6f">
            <LabelList dataKey="submissions.beavers" position="center" />
          </Bar>
          <Bar dataKey="submissions.stars" name="Stars" fill="#fdfe03">
            <LabelList dataKey="submissions.stars" position="center" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
