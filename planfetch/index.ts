import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}

import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message } = req.body;
  const fullName = `${firstName} ${lastName}`.trim();

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: `${fullName} <contact@mg.chrisgardiner.org>`,
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${fullName} (${email}):
    
    ${message}`,
  };

  try {
    await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
