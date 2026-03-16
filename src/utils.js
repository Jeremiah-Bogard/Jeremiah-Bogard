const DATA = {
	/* ── PROJECTS ───────────────────────────────────
     cover: path or URL to an image (optional).
     Leave as null or omit to show a placeholder.
  ──────────────────────────────────────────────── */
	projects: [
		{
			id: "35EFDD39-3F63-43BA-9327-F570FA92F65D",
			title: "Implementing Active Directory",
			cover: "/projects/windows-ad.webp",
			description:
				"Set up a virtual Domain Controller with Windows Active Directory.",
			tags: ["Windows AD", "Active Directory"],
			links: [
				{
					label: "GitHub",
					url: "https://github.com/Jeremiah-Bogard/active-directory-prereqs",
				},
			],
		},
		{
			id: "B31211AD-A4A3-4058-8CA2-8D8095147245",
			title: "Observing Network Traffic - Wireshark",
			cover: "/projects/wireshark.webp",
			description:
				"Learn how to use Wireshark to observe traffic on the network.",
			tags: ["Wireshark"],
			links: [
				{
					label: "GitHub",
					url: "https://github.com/Jeremiah-Bogard/observe-traffic-wireshark",
				},
			],
		},
		{
			id: "2F3AE5EB-0466-4313-BD5C-2E159197C5A4",
			title: "osTicket",
			cover: "/projects/osTicket.webp",
			description:
				"Learn how to use osTicket inside a Windows virtual machine.",
			tags: ["osTicket", "Ticketing Systems", "Help Desk"],
			links: [
				{
					label: "GitHub",
					url: "https://github.com/Jeremiah-Bogard/osTicket-prereqs",
				},
			],
		},
	],

	/* ── SKILLS ───────────────────────────────────── */
	skills: [
		{
			group: "Technical",
			items: [
				"Coaxial/Fiber",
				"Networking",
				"Troubleshooting",
				"Diagnostics",
				"Signal Testing",
				"Hardware Setup",
				"Ticketing Systems",
			],
		},
		{
			group: "Customer Service",
			items: [
				"Communication",
				"Conflict Resolution",
				"Upselling",
				"Consultation",
			],
		},
		{
			group: "Operations",
			items: [
				"Time Management",
				"Prioritization",
				"Safety Compliance",
				"Inventory",
			],
		},
		{
			group: "Soft Skills",
			items: [
				"Collaboration",
				"Adaptability",
				"Detail-Oriented",
				"Accountability",
				"Reliability",
			],
		},
	],

	/* ── CERTIFICATIONS ───────────────────────────── */
	certifications: [
		{
			icon: "/certifications/comptia-a.svg",
			name: "CompTIA A+",
			issuer: "CompTIA",
			date: "Earned: March 2026",
			status: "active",
		},
		{
			icon: "/certifications/itil-v4-foundation.webp",
			name: "ITIL v4 Foundations",
			issuer: "PeopleCert",
			date: "Earned: January 2025",
			status: "active",
		},
		{
			icon: "/certifications/comptia-itf.png",
			name: "CompTIA ITF+",
			issuer: "CompTIA",
			date: "Earned: May 2024",
			status: "active",
		},
		{
			icon: null,
			name: "Cisco CCNA",
			issuer: "Cisco Systems",
			date: "",
			status: "in-progress",
		},
	],

	/* ── EDUCATION ────────────────────────────────── */
	education: [
		{
			id: "F724D173-9A77-4C50-BE95-929B37DF6D02",
			date: "2024 – Expected 2028",
			title: "B.S. Information Technology",
			sub: "Western Governors University",
			desc: "Expected to graduate in 2028. I have/will be learning about Installing, Troubleshooting, and Problem Solving technical devices. Through this degree I will also earn several certifications including but not limited to: CompTIA A+, Network+, and Security+",
		},
	],

	/* ── EXPERIENCE ───────────────────────────────── */
	experience: [
		{
			id: "0FADD554-41CB-4C56-9368-F99FEFDB0DCC",
			date: "2023 - Present",
			title: "Field Technician",
			sub: "Comcast Cable Telecommunications",
			desc: "Provide exemplary customer service. Demonstrate excellent problem-solving to fix issues related to the internet and/or television. Install and set up Internet and/or television for the customer with Coax or Fiber-Optic cables.",
		},
		{
			id: "E8A534D0-70C4-4BE6-AAAD-15B01374B912",
			date: "2021 - 2023",
			title: "Shift Manager",
			sub: "Pizza Hut",
			desc: "Provided service to guests at the drive-thru and counter by taking orders. Completed inventory once a week. Ordered and unloaded the supplies truck.",
		},
	],
}

export function GET(type, length) {
	if (length) return DATA[type].length
	return DATA[type]
}
