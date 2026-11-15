import "./certificates.css";
import { useEffect, useRef, useState } from "react";
import { certificates, type Certificate } from "../../data/certificates";

type Props = { limit?: number };

// A list of certificate titles. Titles with details open a small dialog with
// the description, the certificate image and a verification link.
export default function Certificates({ limit }: Props) {
  const [open, setOpen] = useState<Certificate | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const list = limit ? certificates.slice(0, limit) : certificates;

  return (
    <>
      {list.map((c) => {
        const clickable = !!(c.image || c.description || c.verifyUrl);
        return (
          <div className="aboutusDOTcombi cert-row" key={c.title}>
            <span className="aboutusDot" aria-hidden="true">
              •
            </span>
            <div className="abutMePraatT">
              {clickable ? (
                <button type="button" className="cert-title" onClick={() => setOpen(c)}>
                  {c.title}
                  <span className="cert-view" aria-hidden="true">
                    View
                  </span>
                </button>
              ) : (
                <span className="cert-title-plain">{c.title}</span>
              )}
              {c.date && <span className="cert-date">{c.date}</span>}
            </div>
          </div>
        );
      })}

      <dialog
        ref={dialogRef}
        className="cert-dialog"
        aria-labelledby="cert-dialog-title"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          // Clicking the dark backdrop (outside the panel) closes it.
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        {open && (
          <div className="cert-panel">
            <div className="cert-head">
              <div>
                <h2 id="cert-dialog-title" className="cert-dialog-title">
                  {open.title}
                </h2>
                <p className="cert-meta">
                  {open.issuer}
                  {open.date && ` · ${open.date}`}
                </p>
              </div>
              <button type="button" className="cert-close" aria-label="Close" onClick={() => setOpen(null)}>
                ✕
              </button>
            </div>

            {open.description && <p className="cert-desc">{open.description}</p>}

            {open.image && (
              <a href={open.image} target="_blank" rel="noopener noreferrer" className="cert-img-link">
                <img src={open.image} alt={`${open.title} certificate`} className="cert-img" />
              </a>
            )}

            <div className="cert-actions">
              {open.verifyUrl ? (
                <a className="cert-verify" href={open.verifyUrl} target="_blank" rel="noopener noreferrer">
                  ✓ Verify certificate ↗
                </a>
              ) : (
                <span className="cert-noverify">No online verification link</span>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
