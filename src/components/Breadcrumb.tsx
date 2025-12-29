import Link from "next/link";
import Image from "next/image";

type Props = {
    pageName: string;
    breadcrumbItems: { label: string; href?: string; active?: boolean; icon?: string }[];
    backgroundImage?: string;
};

export default function Breadcrumb({ pageName, breadcrumbItems, backgroundImage }: Props) {
    return (
        <div
            className="pq-breadcrumb-section p-0"
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center'
            } : {}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pq-breadcrumb-title">
                            <h2>{pageName}</h2>
                            <ul className="pq-breadcrumb-list d-flex align-items-center">
                                {breadcrumbItems.map((item, index) => (
                                    <li key={index} className={`pq-breadcrumb-item ${item.active ? 'active' : ''} d-flex align-items-center`}>
                                        {item.active || !item.href ? (
                                            <span style={{ color: '#749ad3ff', fontWeight: 'bold' }}>
                                                {item.icon && <i className={`${item.icon} me-2`}></i>}
                                                {item.label}
                                            </span>
                                        ) : (
                                            <>
                                                <Link href={item.href} style={{ color: '#6c757d' }}>
                                                    {item.icon && <i className={`${item.icon} me-2`}></i>}
                                                    {item.label}
                                                </Link>
                                                <i className="fas fa-angle-right ms-2 me-2 text-muted"></i>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
