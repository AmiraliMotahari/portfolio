"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { user } from "@/lib/data";
import { jsPDF } from "jspdf";
import { useTranslations } from "next-intl";

export default function CVDownloadButton() {
  const t = useTranslations("cvDownloadButton");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // Create a new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Set document properties
      doc.setProperties({
        title: `${user.personalInfo.name} - CV`,
        subject: "Curriculum Vitae",
        author: user.personalInfo.name,
        creator: user.personalInfo.name,
      });

      // Define colors to match the portfolio theme
      const neonGreen = "#4ade80";
      const neonRed = "#f43f5e";
      const darkGray = "#1f2937";
      const lightGray = "#9ca3af";

      // Add background
      doc.setFillColor(18, 18, 18); // Dark background
      doc.rect(0, 0, 210, 297, "F");

      // Header with name and title
      doc.setFontSize(24);
      doc.setTextColor(neonGreen);
      doc.text(user.personalInfo.name, 20, 20);

      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255);
      doc.text(user.personalInfo.title, 20, 30);

      // Contact information
      doc.setFontSize(10);
      doc.setTextColor(lightGray);
      doc.text(`Email: ${user.personalInfo.email}`, 20, 40);
      doc.text(`Location: ${user.personalInfo.location}`, 20, 45);
      doc.text(`Website: ${user.personalInfo.website}`, 20, 50);

      // Summary
      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text("SUMMARY", 20, 70);

      // Add a line under the section title
      doc.setDrawColor(neonGreen);
      doc.setLineWidth(0.5);
      doc.line(20, 72, 190, 72);

      doc.setFontSize(10);
      doc.setTextColor(lightGray);

      // Split the summary into multiple lines
      const summaryLines = doc.splitTextToSize(user.personalInfo.summary, 170);
      doc.text(summaryLines, 20, 80);

      // Skills section
      let yPos = 100;

      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text("SKILLS", 20, yPos);

      doc.setDrawColor(neonGreen);
      doc.setLineWidth(0.5);
      doc.line(20, yPos + 2, 190, yPos + 2);

      yPos += 10;

      // Create two columns for skills
      const skillsPerColumn = Math.ceil(user.skills.length / 2);

      for (let i = 0; i < skillsPerColumn; i++) {
        const skill = user.skills[i];
        if (skill) {
          doc.setFontSize(10);
          doc.setTextColor(lightGray);
          doc.text(`${skill.name}`, 20, yPos);

          // Draw skill level bar
          doc.setDrawColor(darkGray);
          doc.setFillColor(darkGray);

          doc.setDrawColor(neonGreen);
          doc.setFillColor(neonGreen);

          // Draw second column skill if available
          const secondSkill = user.skills[i + skillsPerColumn];
          if (secondSkill) {
            doc.setTextColor(lightGray);
            doc.text(`${secondSkill.name}`, 120, yPos);

            doc.setDrawColor(darkGray);
            doc.setFillColor(darkGray);

            doc.setDrawColor(neonGreen);
            doc.setFillColor(neonGreen);
          }

          yPos += 8;
        }
      }

      // Experience section
      yPos += 10;

      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text("EXPERIENCE", 20, yPos);

      doc.setDrawColor(neonRed);
      doc.setLineWidth(0.5);
      doc.line(20, yPos + 2, 190, yPos + 2);

      yPos += 10;

      for (const exp of user.experiences) {
        doc.setFontSize(11);
        doc.setTextColor(neonGreen);
        doc.text(exp.position, 20, yPos);

        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text(`${exp.company}, ${exp.location}`, 20, yPos + 5);

        doc.setFontSize(9);
        doc.setTextColor(lightGray);
        doc.text(`${exp.startDate} - ${exp.endDate}`, 20, yPos + 10);

        doc.setFontSize(9);
        doc.setTextColor(lightGray);
        const descLines = doc.splitTextToSize(exp.description, 170);
        doc.text(descLines, 20, yPos + 15);

        yPos += 15 + descLines.length * 5;

        // Add achievements if they exist
        if (exp.achievements && exp.achievements.length > 0) {
          for (const achievement of exp.achievements) {
            doc.text(`• ${achievement}`, 25, yPos);
            yPos += 5;
          }
          yPos += 3;
        } else {
          yPos += 5;
        }
      }

      // Check if we need a new page for education
      if (yPos > 250) {
        doc.addPage();
        doc.setFillColor(18, 18, 18);
        doc.rect(0, 0, 210, 297, "F");
        yPos = 20;
      }

      // Education section
      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text("EDUCATION", 20, yPos);

      doc.setDrawColor(neonGreen);
      doc.setLineWidth(0.5);
      doc.line(20, yPos + 2, 190, yPos + 2);

      yPos += 10;

      for (const edu of user.education) {
        doc.setFontSize(11);
        doc.setTextColor(neonGreen);
        doc.text(edu.degree, 20, yPos);

        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text(`${edu.institution}, ${edu.location}`, 20, yPos + 5);

        doc.setFontSize(9);
        doc.setTextColor(lightGray);
        doc.text(`${edu.startDate} - ${edu.endDate}`, 20, yPos + 10);

        if (edu.description) {
          doc.setFontSize(9);
          doc.setTextColor(lightGray);
          const descLines = doc.splitTextToSize(edu.description, 170);
          doc.text(descLines, 20, yPos + 15);
          yPos += 15 + descLines.length * 5 + 5;
        } else {
          yPos += 15;
        }
      }

      // Add a footer with page number
      const totalPages = doc.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(lightGray);
        doc.text(
          `Page ${i} of ${totalPages} | Generated on ${new Date().toLocaleDateString()}`,
          105,
          287,
          {
            align: "center",
          }
        );
      }

      // Save the PDF

      const pdfBlob = doc.output("blob");
      const url = URL.createObjectURL(pdfBlob);

      // Open the PDF in a new tab (especially for iOS)
      window.open(url, "_blank");

      // Optionally, revoke the URL later
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button onClick={generatePDF} disabled={isGenerating}>
      {isGenerating ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>{t("loadingTitle")}</span>
        </span>
      ) : (
        <span className="flex items-center justify-between gap-2">
          <span>{t("title")}</span>
          <Download className="size-4" />
        </span>
      )}
    </Button>
  );
}
