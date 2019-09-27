export const COMPONENT_CLASS_QUERY = 'ClassDeclaration:has(Decorator:has(Identifier[name="Component"]))';
export const INLINE_TEMPLATE_QUERY = `${COMPONENT_CLASS_QUERY} PropertyAssignment:has(Identifier[name="template"])`;
