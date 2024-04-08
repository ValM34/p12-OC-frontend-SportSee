import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Text } from "recharts";
import PropTypes from "prop-types";

// Vrai ordre :
// Intensity - Speed - Strength - Endurance - Energy - Cardio

ActivityType.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string,
      value: PropTypes.number,
    })
  )
};

function ActivityType({ data }) {
  return (
    <div className="radar-chart-container">
      <ResponsiveContainer aspect={1}>
        <RadarChart
          // outerRadius={45}
          data={data}
          style={{ background: "#282D30", fontSize: "12px", borderRadius: "7px" }}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        >
          <PolarGrid radialLines={false} stroke="white" />
          <PolarAngleAxis dataKey="kind" tick={props => renderPolarAngleAxis(props)} />
          <Radar
            dataKey="value"
            stroke="transparent"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityType;

function renderPolarAngleAxis({ payload, x, y, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 8}
      x={x}
    >
      {payload.value}
    </Text>
  );
}