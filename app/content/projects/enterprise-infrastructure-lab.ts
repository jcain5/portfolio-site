import type { ProjectCaseStudy } from "./types";

// Consolidates what were three overlapping home-lab entries (AD/Windows Server
// Lab, pfSense/VLAN Lab, Virtualization/Enterprise Lab) into one deep case
// study. Primary featured project — rendered via /projects/[slug].
export const enterpriseInfrastructureLab: ProjectCaseStudy = {
  slug: "enterprise-infrastructure-lab",
  title: "Enterprise Infrastructure Lab",
  category: "Enterprise Infrastructure",
  color: "cyan",
  focusTracks: ["sysadmin", "infrastructure"],
  featuredRank: 1,
  featuredVariant: "primary",
  summary:
    "A production-style home lab spanning virtualization, Active Directory, and network security — administered like enterprise infrastructure.",

  problem:
    "Enterprise support work means operating Active Directory, Group Policy, and virtualization platforms day to day — but not designing or administering them from the ground up. This lab closes that gap by standing up the same identity, virtualization, and network security stack found in production enterprise environments, administered end-to-end rather than just supported.",
  environment:
    "A self-hosted, multi-hypervisor lab: Proxmox VE as the primary virtualization platform, with VMware Workstation and VirtualBox for isolated testing. Windows Server 2022 domain controllers, Ubuntu and Kali Linux clients, and a pfSense virtual firewall run as VMs across a segmented home network.",
  ownership:
    "Designed, built, and administered independently — architecture, deployment, configuration, and ongoing maintenance, with no managed services or pre-built templates.",
  architecture:
    "Windows Server 2022 promoted to an Active Directory Domain Controller with integrated DNS and DHCP. An OU structure mirrors a department hierarchy to support Group Policy delegation and role-based access control through AD security groups. Network segmentation is handled by a pfSense virtual firewall enforcing a multi-VLAN topology — Trusted, IoT, and DMZ zones — with explicit inter-VLAN routing rules and a Snort IDS/IPS instance monitoring traffic across segments. OpenVPN provides site-to-site and client remote access.",
  implementation: [
    "Installed and configured Windows Server 2022 in a Proxmox virtualized environment",
    "Promoted the server to an Active Directory Domain Controller with integrated DNS and DHCP",
    "Built an OU structure reflecting department hierarchy to support Group Policy delegation",
    "Applied GPOs enforcing security baselines — firewall policy, software restrictions, and account lockout",
    "Configured role-based access control through AD security groups and privilege tiering",
    "Deployed pfSense as a virtual firewall segmenting the network into Trusted, IoT, and DMZ VLANs",
    "Configured inter-VLAN routing with explicit firewall rules and integrated Snort IDS/IPS",
    "Implemented OpenVPN for site-to-site and client remote access",
  ],
  validation:
    "Verified GPO enforcement by confirming security baseline application on domain-joined test machines and testing account lockout and software restriction behavior. Confirmed VLAN isolation by testing inter-VLAN traffic against firewall rules and monitoring Snort IDS/IPS alerts for policy violations. Validated identity lifecycle changes — account provisioning, group membership, and delegated permissions — by testing access before and after changes.",
  documentation:
    "Network topology diagram covering VLAN zones and firewall rule sets, an OU and Group Policy reference for the AD structure, and a runbook for VM provisioning, snapshot management, and cloning across the Proxmox, VMware Workstation, and VirtualBox hosts.",
  outcome:
    "A production-style reference environment for identity administration, Group Policy management, and network segmentation — directly informing GPO, RBAC, and firewall rule decisions applied in enterprise support work.",

  screenshots: [
    { src: null, caption: "Network topology — VLAN segmentation and firewall zones", alt: "Network diagram placeholder" },
    { src: null, caption: "Active Directory OU structure and Group Policy scope", alt: "AD structure diagram placeholder" },
  ],

  technologies: [
    "Proxmox VE", "Windows Server 2022", "Active Directory DS", "GPO", "DNS", "DHCP",
    "pfSense", "Snort IDS/IPS", "OpenVPN", "VLANs", "VMware Workstation", "VirtualBox", "Ubuntu",
  ],
  bullets: [
    "Installed and configured Windows Server 2022 in a Proxmox virtualized environment",
    "Deployed and promoted server to Active Directory Domain Controller with DNS and DHCP integration",
    "Designed an OU structure to reflect department hierarchy and support Group Policy delegation",
    "Implemented Group Policy Objects (GPOs) to enforce security baselines — including firewall policy, software restrictions, and account lockout",
    "Configured role-based access control through AD security groups and privilege tiering",
    "Practiced identity lifecycle management: account provisioning, group membership, and permission delegation",
    "Deployed pfSense as a virtual firewall on Proxmox to segment and protect the home lab environment",
    "Designed a multi-VLAN network topology with isolated zones: Trusted, IoT, and DMZ",
    "Configured inter-VLAN routing with explicit firewall rules controlling permitted traffic between segments",
    "Implemented site-to-site and client VPN for secure remote access using OpenVPN",
    "Integrated Snort IDS/IPS to monitor traffic and alert on suspicious activity across network segments",
    "Built a multi-hypervisor lab using Proxmox, VMware Workstation, and VirtualBox",
    "Runs multiple simultaneous Linux (Ubuntu, Kali) and Windows Server VMs to simulate enterprise environments",
    "Practices snapshot management, VM cloning, and network bridging and isolation",
  ],
};
