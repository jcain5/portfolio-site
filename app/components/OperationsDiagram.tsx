import {
  IconIdentity,
  IconServer,
  IconNetwork,
  IconLayers,
  IconDocument,
  IconOperations,
} from "./icons";

const WIDTH = 480;
const HEIGHT = 420;
const HUB = { x: 240, y: 210 };

const nodes = [
  { key: "identity", x: 240, y: 35, label: "Identity", sub: "Microsoft Entra ID", Icon: IconIdentity },
  { key: "network", x: 406, y: 156, label: "Network & Security", sub: "pfSense · VLANs · VPN", Icon: IconNetwork },
  { key: "docs", x: 343, y: 352, label: "Documentation", sub: "Runbooks · Build Guides", Icon: IconDocument },
  { key: "virtualization", x: 137, y: 352, label: "Virtualization", sub: "Proxmox VE · VMware Horizon", Icon: IconLayers },
  { key: "server", x: 74, y: 156, label: "Windows Server", sub: "AD · DNS · DHCP · GPO", Icon: IconServer },
];

export default function OperationsDiagram() {
  return (
    <div className="relative mx-auto" style={{ width: WIDTH, maxWidth: "100%", aspectRatio: `${WIDTH} / ${HEIGHT}` }}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {nodes.map((n) => (
          <line
            key={n.key}
            x1={HUB.x}
            y1={HUB.y}
            x2={n.x}
            y2={n.y}
            stroke="#38A6B8"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {nodes.map((n) => (
        <div
          key={n.key}
          className="absolute flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur-[2px] px-3 py-2.5 w-[150px]"
          style={{ left: `${(n.x / WIDTH) * 100}%`, top: `${(n.y / HEIGHT) * 100}%`, transform: "translate(-50%, -50%)" }}
        >
          <span className="shrink-0 text-[#38A6B8]">
            <n.Icon className="w-4 h-4" />
          </span>
          <span>
            <span className="block text-xs font-semibold text-white leading-tight">{n.label}</span>
            <span className="block text-[10px] font-mono text-slate-400 leading-tight mt-0.5">{n.sub}</span>
          </span>
        </div>
      ))}

      <div
        className="absolute flex flex-col items-center justify-center gap-1 rounded-full border border-[#2F75C8]/50 bg-[#0F2036] w-[100px] h-[100px] text-center"
        style={{ left: `${(HUB.x / WIDTH) * 100}%`, top: `${(HUB.y / HEIGHT) * 100}%`, transform: "translate(-50%, -50%)" }}
      >
        <span className="text-[#8FB4DC]">
          <IconOperations className="w-5 h-5" />
        </span>
        <span className="text-[10px] font-mono font-semibold text-white leading-tight px-1">
          Operations &amp; Support
        </span>
      </div>
    </div>
  );
}
