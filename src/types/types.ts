import {NumberValue} from 'd3';

export interface BarChartData {
	errors: {};
	id: number;
	source_name: string;
	source_code: string;
	code: string;
	name: string;
	urlize_name: string;
	display_url: string;
	description: string;
	updated_at: string;
	frequency: string;
	from_date: string;
	to_date: string;
	column_names: string[];
	private: boolean;
	type: null;
	premium: boolean;
	data: Iterable<NumberValue>;
}

export type ScatterPlotData = Array<ScatterPlotPoint>;
export interface ScatterPlotPoint {
	Time: string;
	Place: number;
	Seconds: number;
	Name: string;
	Year: number;
	Nationality: string;
	Doping: string;
	URL: string;
}

// export interface HeatMapData {
// 	baseTemperature: number;
// 	monthlyVariance: MonthlyVariance[];
// }
// export interface MonthlyVariance {
// 	year: number;
// 	month: number;
// 	variance: number;
// }
