export interface MailAuthor {
  id: string;
  name: string;
  address: string;
}

export interface MailLabel {
  id: string;
  name: string;
  mailTotal: number;
  mailUnread: number;
  cosmetic: {
    icon: string;
    textColor: string;
    backgroundColor: string;
  };
}

export interface MailPayload {
  from: MailAuthor;
  to: MailAuthor;
  subject: string;
  body: string;
}

export interface Mail {
  id: string;
  labelIds: string[];
  payload: MailPayload;
  date: Date;
}
