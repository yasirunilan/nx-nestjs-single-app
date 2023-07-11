import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { LibGeneratorGeneratorSchema } from './schema';
import { pascalCase } from 'change-case';

export async function libGeneratorGenerator(
  tree: Tree,
  options: LibGeneratorGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...options,
    pascalCase,
  });
  await formatFiles(tree);
}

export default libGeneratorGenerator;
