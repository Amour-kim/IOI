import { teamData } from './team.data';

/**
 * Récupère tous les membres de l'équipe
 */
export const getAllTeamMembers = () => {
  return teamData;
};

/**
 * Récupère un membre de l'équipe par son ID
 */
export const getTeamMemberById = (id: string) => {
  return teamData.find(member => member.id === id);
};

/**
 * Récupère les membres de l'équipe par rôle
 */
export const getTeamMembersByRole = (role: string) => {
  return teamData.filter(member => 
    member.role.toLowerCase() === role.toLowerCase()
  );
};

/**
 * Récupère les rôles uniques dans l'équipe
 */
export const getTeamRoles = () => {
  const roles = new Set<string>();
  teamData.forEach(member => {
    if (member.role) {
      roles.add(member.role);
    }
  });
  return Array.from(roles);
};

/**
 * Récupère les compétences uniques de l'équipe
 */
export const getTeamSkills = () => {
  const skills = new Set<string>();
  teamData.forEach(member => {
    if (member.skills && member.skills.length > 0) {
      member.skills.forEach(skill => skills.add(skill));
    }
  });
  return Array.from(skills).sort();
};
