
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbNavProps {
  breadcrumbs: Array<{ name: string; path: string }>;
}

const BreadcrumbNav = ({ breadcrumbs }: BreadcrumbNavProps) => {
  return (
    <div className="bg-gray-50 py-2 border-t border-gray-100">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, i) => (
              <React.Fragment key={breadcrumb.path}>
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to={breadcrumb.path}>
                          {breadcrumb.name}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbNav;
