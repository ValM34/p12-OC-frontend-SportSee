import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const style = {
  top: "6%",
  left: "8%",
  lineHeight: "24px",
};

AverageScore.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      todayScore: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

function AverageScore({ data }) {
  return (
    <div className="radial-bar-chart-container">
      <ResponsiveContainer aspect={1}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          barSize={20}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            className="radial-bar-custom-css"
            minAngle={15}
            background={{ fill: "#fbfbfb" }}
            clockWise
            dataKey="todayScore"
            angleAxisId={0}
            cornerRadius={10}
          />
          <Legend
            iconSize={0}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="average-score-container">
        <div>{data ? data[0].todayScore : ""}%</div>
        <div>de votre</div>
        <div>objectif</div>
      </div>
    </div>
  );
}

export default AverageScore;
