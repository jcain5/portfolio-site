import type { ProjectCaseStudy } from "./types";

export const networkPortScanner: ProjectCaseStudy = {
  slug: "network-port-scanner",
  title: "Python Network Port Scanner",
  subtitle: "Independent Python Learning Project",
  category: "Software Development",
  status: "Version 1.0 Complete",
  color: "slate",
  focusTracks: [],
  summary:
    "A Python TCP port scanner built for authorized infrastructure-lab testing. It validates target IP addresses, scans common TCP ports, maps ports to likely services, distinguishes connection outcomes, measures scan duration, and exports timestamped results to CSV.",

  overview:
    "Built as a guided Python learning project for scanning systems in an authorized home infrastructure lab, this command-line scanner practices socket programming, structured data handling, and file I/O against real network services in a controlled environment.",

  problem:
    "Ad hoc port checks with individual terminal commands don't scale and leave no record. The goal was a reusable way to check common TCP services against a target and preserve the results, instead of relying on temporary terminal output that disappears after the session ends.",

  solution: [
    "Prompt for a target IP address",
    "Validate the address as IPv4 or IPv6",
    "Scan a predefined dictionary of common TCP services",
    "Classify each TCP connection result",
    "Display readable, real-time output for each port",
    "Save timestamped results to a CSV file",
    "Allow the user to append to or overwrite the existing CSV",
  ],

  implementation: [
    "Used Python's ipaddress module to validate IPv4 and IPv6 target addresses before scanning",
    "Implemented TCP socket scanning with configurable connection timeouts",
    "Classified each connection attempt as OPEN, CLOSED, TIMEOUT, or UNREACHABLE",
    "Mapped scanned ports to common service names for readable output",
    "Measured and reported total scan duration",
    "Exported timestamped scan results to CSV with append or overwrite modes",
    "Handled Ctrl+C interruption gracefully instead of crashing mid-scan",
    "Packaged the project on GitHub with a README, LICENSE, .gitignore, and sanitized sample CSV",
  ],

  skillsDemonstrated: [
    "Functions and Type Hints",
    "Socket Programming",
    "Exception Handling",
    "Dictionaries and Lists",
    "CSV File Operations",
    "Main Entry-Point Structure",
    "Graceful Interruption Handling",
    "GitHub Packaging and Evidence Sanitization",
  ],

  currentLimitations: [
    "Scans a single host at a time",
    "Executes scans sequentially, not concurrently",
    "TCP only — no UDP support",
    "Uses a predefined port list rather than custom ranges",
    "No operating-system detection",
    "No service-version detection",
    "No vulnerability scanning",
    "No exploitation or authentication attempts",
  ],

  roadmap: [
    "CIDR subnet scanning",
    "Concurrent scanning with thread pools",
    "Hostname resolution",
    "Command-line arguments",
    "Configurable timeout values and custom port ranges",
    "Optional JSON export",
    "Automated tests",
    "Sanitized reporting mode",
  ],

  securityNote:
    "This tool is intended only for systems and networks that you own or have explicit permission to test. It does not perform exploitation, credential attacks, or authentication attempts, and unauthorized port scanning may violate organizational policies, service agreements, or applicable law.",

  screenshots: [
    {
      src: "/images/projects/network-port-scanner/sample-scan-results.png",
      caption: "Sanitized sample_scan_results.csv showing the timestamp, target, port, service, and status fields.",
      alt: "Spreadsheet view of sample_scan_results.csv with fictional documentation-range IP addresses and TCP scan statuses",
    },
  ],

  technologies: ["Python", "Sockets", "TCP/IP", "CSV", "Git", "GitHub"],
  github: "https://github.com/jcain5/Network-Port-Scanner",
  bullets: [
    "Built a Python TCP port scanner for authorized infrastructure-lab testing",
    "Validated IPv4 and IPv6 targets and classified results as OPEN, CLOSED, TIMEOUT, or UNREACHABLE",
    "Mapped scanned ports to common service names and measured total scan duration",
    "Exported timestamped results to CSV with append or overwrite modes",
  ],

  metaTitle: "Python Network Port Scanner | Jeremy M. Cain",
  metaDescription:
    "A Python TCP port scanner for authorized infrastructure-lab testing — IP validation, socket programming, service mapping, and timestamped CSV export.",
};
