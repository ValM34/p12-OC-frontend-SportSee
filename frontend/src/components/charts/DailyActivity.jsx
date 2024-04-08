import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

DailyActivity.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number,
          kilogram: PropTypes.number,
          calories: PropTypes.number,
        })
      ),
    }),
  }),
};

const style = {
  top: "-130px",
  right: "-40px",
  lineHeight: "24px",
};

function DailyActivity({ data }) {
  return (
    <div className="bar-chart-container">
      <ResponsiveContainer>
        <BarChart
          data={data?.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={-50}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* <CartesianGrid strokeDasharray="3 3" vertical={false} width={645} x={60} /> */}
          <XAxis dataKey="day" tickLine={false} padding={{ left: 0, right: 0 }} stroke="#9B9EAC" />
          {/* <YAxis domain={[80, 100]} /> */}
          <YAxis
            orientation="right"
            tickMargin={30}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Legend
            iconSize={10}
            iconType="circle"
            width={400}
            height={200}
            verticalAlign="middle"
            wrapperStyle={style}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            maxBarSize={7}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#ff0000"
            radius={[20, 20, 0, 0]}
            maxBarSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
