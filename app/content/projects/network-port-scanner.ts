import type { ProjectCaseStudy } from "./types";

export const networkPortScanner: ProjectCaseStudy = {
  slug: "network-port-scanner",
  title: "Python Network Port Scanner",
  subtitle: "Modular TCP scanner with CLI controls, CSV reporting, validation, and automated tests.",
  category: "Software Development",
  status: "Phase 2 Complete",
  color: "slate",
  focusTracks: [],
  summary:
    "Built a modular Python TCP port scanner for authorized lab use. It supports custom targets, ports, timeouts, output filenames, append and overwrite modes, service mapping, CSV reporting, and 27 automated tests.",

  overview:
    "Built as a guided Python learning project for scanning systems in an authorized home infrastructure lab, this command-line scanner practices socket programming, structured data handling, and file I/O against real network services in a controlled environment.",

  problem:
    "Ad hoc port checks with individual terminal commands don't scale and leave no record. The goal was a reusable way to check common TCP services against a target and preserve the results, instead of relying on temporary terminal output that disappears after the session ends.",

  solution: [
    "Parse command-line arguments for target, timeout, ports, and output file",
    "Validate the target address as IPv4 or IPv6",
    "Validate timeout and port-list values before scanning",
    "Scan the built-in common-service list or a custom port list over TCP",
    "Classify each TCP connection result",
    "Display readable, real-time output for each port",
    "Save timestamped results to CSV in append or overwrite mode",
  ],

  implementation: [
    "Refactored the original script into a modular scanner package: validation, scanning, services, and reporting",
    "Built a command-line interface with argparse for --target, --timeout, --ports, and --output",
    "Enforced mutually exclusive --append and --overwrite flags at the parser level",
    "Validated IPv4/IPv6 targets, timeout ranges, and custom port lists before scanning",
    "Classified each connection attempt as OPEN, CLOSED, TIMEOUT, or UNREACHABLE",
    "Mapped scanned ports to common service names, labeling unmapped ports UNKNOWN",
    "Handled Ctrl+C interruption gracefully instead of crashing mid-scan",
    "Wrote 27 automated unit tests covering validation, mocked-socket scanning, and argument parsing",
  ],

  features: [
    "IPv4 and IPv6 validation",
    "OPEN, CLOSED, TIMEOUT, and UNREACHABLE statuses",
    "--target, --timeout, --ports, and --output flags",
    "Mutually exclusive --append and --overwrite modes",
    "Modular Python package design",
    "Mocked socket and parser tests",
    "27 passing automated tests",
    "Standard library only — no third-party dependencies",
  ],

  skillsDemonstrated: [
    "Python",
    "TCP Sockets",
    "argparse",
    "CSV",
    "unittest",
    "Mocking",
    "Input Validation",
    "Modular Design",
    "Git",
    "GitHub",
    "Networking",
  ],

  currentLimitations: [
    "Scans a single host at a time",
    "Executes scans sequentially, not concurrently",
    "TCP only — no UDP support",
    "No operating-system detection",
    "No service-version detection",
    "No vulnerability scanning or exploitation",
    "No stealth scanning techniques",
  ],

  roadmap: [
    "Phase 3: Multi-host and CIDR scanning",
    "Phase 4: Data visualization and historical comparison",
    "Phase 5: AI-assisted interpretation and visual modeling",
  ],

  securityNote:
    "This tool is intended only for systems and networks that you own or have explicit permission to test. It does not perform exploitation, credential attacks, or authentication attempts, and unauthorized port scanning may violate organizational policies, service agreements, or applicable law.",

  verification: {
    summary: "27 automated tests passing across:",
    items: [
      "IP address validation",
      "TCP scan outcomes",
      "CLI argument parsing",
      "timeout validation",
      "custom-port validation",
    ],
  },

  screenshots: [
    {
      src: "/images/projects/network-port-scanner/help-screenshot.png",
      caption: "Command-line --help output showing the target, timeout, ports, output, append, and overwrite options.",
      alt: "Terminal output of `python3 main.py --help` listing the scanner's command-line options",
    },
    {
      src: "/images/projects/network-port-scanner/sample-scan-results.png",
      caption: "Sanitized sample_scan_results.csv showing the timestamp, target, port, service, and status fields.",
      alt: "Spreadsheet view of sample_scan_results.csv with fictional documentation-range IP addresses and TCP scan statuses",
    },
  ],

  technologies: ["Python", "argparse", "Sockets", "TCP/IP", "CSV", "unittest", "Git", "GitHub"],
  github: "https://github.com/jcain5/Network-Port-Scanner",
  bullets: [
    "Built a modular Python TCP port scanner with a CLI (argparse) for authorized lab use",
    "Validated IPv4 and IPv6 targets, timeouts, and custom port lists before scanning",
    "Classified TCP results as OPEN, CLOSED, TIMEOUT, or UNREACHABLE and exported timestamped CSV reports",
    "Covered the codebase with 27 automated unit tests using mocked sockets",
  ],

  metaTitle: "Python Network Port Scanner (Phase 2) | Jeremy M. Cain",
  metaDescription:
    "A modular Python TCP port scanner with CLI controls, input validation, CSV reporting, and 27 automated tests — built for authorized lab use.",
};
