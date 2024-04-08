import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

AverageSessions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
};

const style = {
  top: "5%",
  left: "6.5%",
  color: "#ffffff80",
  width: "180px",
  fontSize: "15px",
  lineHeight: "24px",
};

function AverageSessions({ data }) {
  return (
    <div className="line-chart-container">
      <ResponsiveContainer aspect={1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -50,
            bottom: -30,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#ffffff80"
          />
          <YAxis
            domain={[-10, 100]}
            tick={false}
            axisLine={false}
            padding={{ left: 0, right: 0 }}
          />
          <Tooltip />
          <Legend
            payload={[{ value: "Durée moyenne des sessions" }]}
            wrapperStyle={style}
            iconSize={0}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={{ r: 0 }}
            strokeWidth={2}
            stroke="url(#colorGradient)"
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={0.6} />
              <stop offset="100%" stopColor="white" stopOpacity={1} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessions;
