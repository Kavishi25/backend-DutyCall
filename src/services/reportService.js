// reportService.js
import Report from "../models/ReportModel.js";

export const createReport = async (reportData) => {
  try {
    // Validate required fields
    const { category, location, description } = reportData;

    if (!category || !location || !description) {
      throw new Error(
        "Please provide all required fields: category, location, description"
      );
    }

    if (!location.latitude || !location.longitude) {
      throw new Error("Please provide both latitude and longitude");
    }

    // Create new report
    const report = new Report(reportData);
    await report.save();

    return report;
  } catch (error) {
    throw new Error(error.message);
  }
};
