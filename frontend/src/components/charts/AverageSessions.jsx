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
import { useState } from 'react';

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
  const [shadowPosition, setShadowPosition] = useState(null);
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
          onMouseMove={(e) => {
            if(e.activeCoordinate?.x !== undefined) {
              return e.activeCoordinate.x <= 0 ? setShadowPosition(1000) : setShadowPosition(e.activeCoordinate.x)
            }
          }}
          onMouseLeave={() => setShadowPosition(1000)}
        >
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
          <Tooltip labelFormatter={() => ""} formatter={(value, name) => [`${value} ${name}`]} cursor={{ display: "none" }} />
          <Legend
            payload={[{ value: "Durée moyenne des sessions" }]}
            wrapperStyle={style}
            iconSize={0}
          />
          <Line
            type="natural"
            dataKey="min"
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
        <div className="average-sessions-shadow" style={{ left: shadowPosition ?? 1000 }}></div>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessions;
