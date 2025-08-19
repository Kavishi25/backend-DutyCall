import { createReport } from "../services/reportService.js";

export const createReportController = async (req, res) => {
  try {
    const report = await createReport(req.body);
    res.status(201).json({
      success: true,
      data: report,
      message: "Report created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
