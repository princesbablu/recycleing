import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({address="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token rounded border border-black position-relative z-1 overflow-auto">
            <p>CA: {token}</p>
            <button onClick={() => copyHandle()} className="border-0 p-0 position-absolute top-50 end-0 translate-middle-y h-100">
                {copied ? <LuCopyCheck /> : <LuCopy />}
            </button>
        </div>
    )
}
