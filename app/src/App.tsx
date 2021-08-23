/**
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 EclipseSource Munich
 * Licensed under MIT
 * https://github.com/eclipsesource/jsonforms-editor/blob/master/LICENSE
 * ---------------------------------------------------------------------
 */
import JsonFormsEditor, {
  defaultSchemaDecorators,
  defaultSchemaProviders,
  ReactMaterialPreview,
} from '@jsonforms/editor/src';
import { WorkflowSchemaService } from '@vinetiworks/workflow-schema-service';
import React from 'react';

import { Footer } from './components/Footer';

const schemaService = new WorkflowSchemaService();
export const App = () => (
  <JsonFormsEditor
    schemaService={schemaService}
    schemaProviders={defaultSchemaProviders}
    schemaDecorators={defaultSchemaDecorators}
    editorTabs={[{ name: 'Preview (React)', Component: ReactMaterialPreview }]}
    footer={Footer}
  />
);
